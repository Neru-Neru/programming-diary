/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { act_dic } from '../components/blocks/act_dic';
import { ele_dic } from '../components/blocks/ele_dict';

const MyDiary = (props) => {
  const arg = props.history.location.state.tile;
  const src =
    'https://terminal-8c860.web.app/pixi?' + 'username=' + arg.username + '&date=' + arg.date + '&' + arg.query;
  // クエリの処理
  let ans = '';
  let act = [];
  let ele = [];
  let flg = true;
  const queryList = arg.query.split('&');
  for (const elem of queryList) {
    const block = elem.split('=');
    if (block[0].match(/^a/g)) {
      act.push(act_dic[block[1]]);
      if (flg) {
        ele.push('');
        flg = !flg;
      }
      flg = !flg;
    } else {
      if (block[1] !== '') ele.push(ele_dic[block[1]]);
      else ele.push('');
      flg = !flg;
    }
  }
  for (let i = 0; i < act.length; i++) {
    ans += ele[i] + act[i] + '\n';
  }
  console.log(ans);

  return (
    <div css={Background}>
      <div css={ContentBack} class="row">
        <div class="col-7">
          <Tabs indicatorColor="primary" textColor="primary" centered>
            <TabList>
              <Tab>どうが</Tab>
              <Tab>にっき</Tab>
            </TabList>
            <TabPanel style={{ width: '640px', height: '360px' }}>
              <iframe src={src} scrolling="no" width="100%" height="100%"></iframe>
            </TabPanel>
            <TabPanel style={{ width: '640px', height: '360px' }}>
              {ans.split('\n').map((line) => (
                <p>
                  {line}
                  <br />
                </p>
              ))}
            </TabPanel>
          </Tabs>
        </div>
        <div class="col-5">
          <div class="my-3 p-3 border rounded-pill d-flex align-items-center justify-content-center bg-white">
            <h4 class="text-center">{arg.title}</h4>
          </div>
          <div class="p-3 border h-75 rounded-3 bg-white">
            <p>{arg.desc}</p>
          </div>
        </div>
        <div>
          <button onClick={() => props.history.goBack()} class="btn btn-outline-secondary">
            もどる
          </button>
        </div>
      </div>
    </div>
  );
};

const Background = css`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #8ac7de;
  padding: 0 10%;
`;

const ContentBack = css`
  height: 100%;
  padding: 5% 5%;
  background: rgb(220, 242, 250);
`;

export default MyDiary;
