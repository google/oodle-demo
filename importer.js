// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs';

const DOODLES_FILE = './static/doodles.json';
const API_URL = 'https://www.google.com/doodles/json';
const API_PARAMS = 'full=1';
const FROM_YEAR = 2015;

const getApiUrls = () => {
  const today = new Date();
  const thisYear = today.getFullYear();
  const years = Array.from(
    new Array(thisYear - FROM_YEAR),
    (x, i) => i + FROM_YEAR);

  return years.reduce((urls, year) => {
    return urls.concat(Array.from(
      new Array(12),
      (x, i) => (`${API_URL}/${year}/${i + 1}?${API_PARAMS}`)
    ));
  }, []).concat(Array.from(
    new Array(today.getMonth() + 1),
    (x, i) => (`${API_URL}/${thisYear}/${i + 1}?${API_PARAMS}`)
  ));
};

const saveDoodlesFile = (doodles) => {
  const data = JSON.stringify(doodles);
  const doodleFile = path.join(__dirname, DOODLES_FILE);
  fs.writeFile(doodleFile, data, (err) => {
    if (err) throw err;
    console.log(`The doodles file has been saved at ${doodleFile}`);
  });
};

const isInteractive = doodle => doodle.doodle_type === 'interactive';

const fetchUrl = url => fetch(url).then(res => res.json());

const formatDoodle = doodle => ({
  title: doodle.title,
  is_animated_gif: doodle.is_animated_gif,
  doodle_type: doodle.doodle_type,
  standalone_html: `//www.google.com${doodle.standalone_html}`,
  run_date_array: doodle.run_date_array,
  is_dynamic: doodle.is_dynamic,
  tags: doodle.tags,
  share_text: doodle.share_text,
  countries: doodle.countries,
  url: doodle.url,
});

const importDoodles = () => {
  const urls = getApiUrls();
  console.log(`Requesting ${urls.length} doodle resources...`);
  return Promise.all(urls.map(fetchUrl))
    .then(results => {
      const doodles = results.reduce((doodleList, result) => {
        return doodleList.concat(result.filter(isInteractive).map(formatDoodle))
      }, []);
      console.log(`Fetched ${doodles.length} doodles`)
      return saveDoodlesFile(doodles);
    });
};

importDoodles();
