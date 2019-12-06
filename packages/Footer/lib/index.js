import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import MyBit from "../images/logo.svg";
import Telegram from "../images/telegram.svg";
import Reddit from "../images/reddit.svg";
import Medium from "../images/medium.svg";
import Twitter from "../images/twitter.svg";
import Facebook from "../images/facebook.svg";

import ThemeWebsite from "@mybit/ui.theme-website";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <ThemeWebsite />
        <div className="ph2 flex-ns flex-row-ns flex-wrap-m justify-between-ns">
          <div className="pv3 pv0-ns order-1-l">
            {this.props.isGo ? (
              <>
                <STitle>Go</STitle>
                <SButton target="_top" href="https://app.mybit.io/">
                  Launch MyBit
                </SButton>
              </>
            ) : (
              <>
                <STitle>be part of mybit</STitle>
                <SButton
                  target="_blank"
                  rel="noreferrer"
                  href="https://task.market/"
                >
                  Get Involved
                </SButton>
              </>
            )}
            <div className="pt5" />
            <STitle>Follow us</STitle>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://t.me/mybitio"
            >
              <Telegram alt="telegram" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://www.reddit.com/user/MyBit_DApp/"
            >
              <Reddit alt="reddit" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://medium.com/mybit-dapp"
            >
              <Medium alt="medium" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://twitter.com/MyBit_DApp"
            >
              <Twitter alt="twitter" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://www.facebook.com/MyBitDApp/"
            >
              <Facebook alt="facebook" />
            </a>
          </div>
          <SAddress>
            <MyBit className="pb1" alt="mybit logo" />
            <div className="dib-ns">
              MyBit is operated and maintained by a DAO
              <div>DAO address:</div>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://mainnet.aragon.org/#/0xcD3d9b832BfF15E0a519610372c6AAC651872DdE/"
              >
                0xcD3d9b832BfF15E0a519610372c6AAC651872DdE
              </SAnchor>
              <div className="pb2" />
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MyBitFoundation/MyBit.io/blob/develop/TOC.md"
              >
                Terms & Conditions
              </SAnchor>
              <div className="pb2" />
            </div>
          </SAddress>
          <div className="flex-ns flex-row-ns justify-between-ns w-100 w-50-l pt3-m pt0-l order-0-l">
            {" "}
            <div className="pb3 pb0-ns">
              {this.props.isGo ? (
                <>
                  <STitle>MyBit</STitle>
                  <SLink to="/about">about</SLink>
                  <SLink to="/howitworks">how it works</SLink>
                  <SLink to="/dao">DAO</SLink>
                  <SAnchor href="https://t.me/mybitio">contact</SAnchor>
                </>
              ) : (
                <>
                  <STitle>about mybit</STitle>
                  <SAnchor
                    target="_blank"
                    rel="noreferrer"
                    href="https://learn.mybit.io"
                  >
                    Content Portal
                  </SAnchor>
                  <SLink to="/about">company</SLink>
                  <SAnchor
                    target="_blank"
                    rel="noreferrer"
                    href="https://learn.mybit.io/learn/mybit-token-myb-1"
                  >
                    token
                  </SAnchor>
                  <SAnchor
                    target="_blank"
                    rel="noreferrer"
                    href="https://hq.mybit.io"
                  >
                    transparency portal
                  </SAnchor>
                  <SAnchor href="https://t.me/mybitio">contact</SAnchor>
                </>
              )}
            </div>
            {!this.props.isGo && (
              <div className="pb3 pb0-ns">
                <STitle>products</STitle>
                <SAnchor
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.mybit.io/"
                >
                  {" "}
                  MyBit
                </SAnchor>
                <SAnchor
                  target="_blank"
                  rel="noreferrer"
                  href="https://mydax.io/"
                >
                  {" "}
                  MYDAX{" "}
                </SAnchor>
                <SAnchor
                  target="_blank"
                  rel="noreferrer"
                  href="https://task.market/"
                >
                  {" "}
                  Task Market{" "}
                </SAnchor>
                <SLink to="/tools">Other dApps</SLink>
              </div>
            )}
            <div className="pb2 pb0-ns">
              <STitle>resources</STitle>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://medium.com/mybit-dapp"
              >
                Blog
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://developer.mybit.io/portal/"
              >
                SDK
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MyBitFoundation"
              >
                Github
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://whitepaper.mybit.io/"
              >
                whitepaper
              </SAnchor>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const SButton = styled.a.attrs({
  className: "link no_underline tc center b pa1 bhover"
})`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-family: Gilroy;
  line-height: 14px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #1890ff;
`;

const STitle = styled.div.attrs({ className: "black b pb2" })`
  font-family: Gilroy;
  line-height: 12px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #111111;
`;
const SAnchor = styled.a.attrs({
  className: "pb1 db ttc no-underline underline-hover"
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;

  color: #6c6c6c;
`;

const SLink = styled(Link).attrs({
  className: "pb1 db ttc no-underline underline-hover"
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;

  color: #6c6c6c;
`;
const SAddress = styled.div.attrs({
  className: "mw5-ns ttc no-underline tr-ns  order-2-l"
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  color: #6c6c6c;
`;
const SCopyright = styled.div.attrs({
  className: "pb1 db ttc pt2 no-underline tc center"
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  max-width: 50%;
  color: #6c6c6c;
`;
