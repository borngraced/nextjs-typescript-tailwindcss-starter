import React, { useState } from "react";

type Props = {};

const faqsData = [
  {
    title: `What is Lido?`,
    body: ` <p>
                    Lido is a liquid staking solution for ETH 2.0 backed by
                    industry-leading staking providers. Lido lets users stake
                    their ETH - without locking assets or maintaining
                    infrastructure - whilst participating in on-chain
                    activities, e.g. lending.
                  </p>
                  <p>
                    Our goal is to solve the problems associated with initial
                    ETH 2.0 staking - illiquidity, immovability and
                    accessibility - making staked ETH liquid and allowing for
                    participation with any amount of ETH to improve security of
                    the Ethereum network.
                  </p>
                  <p>
                    As part of our continuing efforts to be a force for
                    decentralization, we have published a{" "}
                    <a
                      href="https://scorecard.lido.fi"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      scorecard
                    </a>{" "}
                    for community input and accountability.
                  </p>
                  <p>
                    Learn more{" "}
                    <a
                      href="https://blog.lido.fi/introducing-lido/"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      here
                    </a>
                    .
                  </p>`,
  },
  {
    title: ` What is liquid staking?`,
    body: ` <p>
                    Liquid staking protocols allow users to earn staking rewards
                    without locking assets or maintaining staking
                    infrastructure. Users can deposit tokens and receive
                    tradable liquid tokens in return. The DAO-controlled smart
                    contract stakes these tokens using elected staking
                    providers. As users funds are controlled by the DAO, staking
                    providers never have direct access to the users' assets.
                  </p>`,
  },
  {
    title: `What is stETH?`,
    body: `<p>
                    stETH is a token that represents staked ether in Lido,
                    combining the value of initial deposit + staking rewards.
                    stETH tokens are minted upon deposit and burned when
                    redeemed. stETH token balances are pegged 1:1 to the ethers
                    that are staked by Lido. stETH token’s balances are updated
                    when the oracle reports change in total stake every day.
                  </p>
                  <p>
                    stETH tokens can be used as one would use ether, allowing
                    you to earn ETH 2.0 staking rewards whilst benefiting from
                    e.g. yields across decentralised finance products.
                  </p>`,
  },
  {
    title: `How is Lido secure?`,
    body: `   <p>
                    Lido is a secure liquid staking solution for a number of
                    reasons:
                  </p>
                  <ul>
                    <li>Open-sourcing &amp; continuous review of all code.</li>
                    <li>
                      Committee of elected, best-in-class validators to minimise
                      staking risk.
                    </li>
                    <li>
                      Use of non-custodial staking service to eliminate
                      counterparty risk.
                    </li>
                    <li>
                      Use of DAO for governance decisions &amp; to manage risk
                      factors.
                    </li>
                  </ul>
                  <p>
                    Usually when staking ETH you choose only one validator. In
                    the case of Lido you stake across many validators,
                    minimising your staking risk.
                  </p>`,
  },
  {
    title: `What is the difference between self staking and liquid staking?`,
    body: ` <p>
                    Ethereum is soon to be the biggest staking economy in the
                    space. However, staking on ETH 2.0 requires expert knowledge
                    and complex and costly infrastructure. There are several
                    reasons why - the main being the fact that slashing and
                    offline penalties can get very severe if the staking is
                    managed improperly. In addition to this, self-staking brings
                    with it a minimum deposit of 32 ETH and a token lock-up
                    which could last years.
                  </p>
                  <p>
                    Through the use of a liquid self-staking service such as
                    Lido, users can eliminate these inconveniences and benefit
                    from secure, non-custodial staking backed by industry
                    leaders.
                  </p>`,
  },
  {
    title: `What are the risks of staking with Lido?`,
    body: ` <p>
                    There exist a number of potential risks when staking ETH
                    using liquid staking protocols.
                  </p>
                  <ul>
                    <li>
                      <p>Smart contract security</p>
                      <p>
                        There is an inherent risk that Lido could contain a
                        smart contract vulnerability or bug. The Lido code is
                        open-sourced, audited and covered by an extensive bug
                        bounty program to minimise this risk.
                      </p>
                    </li>
                    <li>
                      <p>ETH 2.0 - Technical risk</p>
                      <p>
                        Lido is built atop experimental technology under active
                        development, and there is no guarantee that ETH 2.0 has
                        been developed error-free. Any vulnerabilities inherent
                        to ETH 2.0 brings with it slashing risk, as well as
                        stETH fluctuation risk.
                      </p>
                    </li>
                    <li>
                      <p>ETH 2.0 - Adoption risk</p>
                      <p>
                        The value of stETH is built around the staking rewards
                        associated with the Ethereum beacon chain. If ETH 2.0
                        fails to reach required levels of adoption we could
                        experience significant fluctuations in the value of ETH
                        and stETH.
                      </p>
                    </li>
                    <li>
                      <p>DAO key management risk</p>
                      <p>
                        On early stages of Lido, slightly more than 600k ETH
                        became held across multiple accounts backed by a
                        multi-signature threshold scheme to minimize custody
                        risk. If signatories across a certain threshold lose
                        their key shares, get hacked or go rogue, we risk these
                        funds (&lt;20% of total stake as of April 2022) becoming
                        locked.
                      </p>
                    </li>
                    <li>
                      <p>Slashing risk</p>
                      <p>
                        ETH 2.0 validators risk staking penalties, with up to
                        100% of staked funds at risk if validators fail. To
                        minimise this risk, Lido stakes across multiple
                        professional and reputable node operators with
                        heterogeneous setups, with additional mitigation in the
                        form of coverage that is paid from Lido fees.
                      </p>
                    </li>
                    <li>
                      <p>stETH price risk</p>
                      <p>
                        Users risk an exchange price of stETH which is lower
                        than inherent value due to withdrawal restrictions on
                        Lido, making arbitrage and risk-free market-making
                        impossible. The Lido DAO is driven to mitigate above
                        risks and eliminate them entirely to the extent
                        possible. Despite this, they may still exist and, as
                        such, it is our duty to communicate them.
                      </p>
                    </li>
                  </ul>`,
  },
  {
    title: `What fee is applied by Lido? What is this used for?`,
    body: ` <p>
                    Lido applies a 10% fee on a user’s staking rewards. This fee
                    is split between node operators, the DAO, and a coverage
                    fund.
                  </p>`,
  },
  {
    title: `How stETH can be converted to ETH?`,
    body: `<p>
                    While there's no way to withdraw ETH from staking until
                    withdrawals are enabled on the Beacon chain, stETH holders
                    may exchange their stETH to ETH on liquidity pools such as{" "}
                    <a
                      href="https://curve.fi/steth"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      Curve
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://app.balancer.fi/#/trade"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      Balancer
                    </a>
                    .
                  </p>`,
  },
  {
    title: ` Lido Referral Program`,
    body: ` <p>
                    The Lido Referral Program transitioned to whitelist mode (in
                    line with the following{" "}
                    <a
                      href="https://research.lido.fi/t/switch-referral-program-to-whitelist-mode/1014"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      proposal
                    </a>
                    ) which means that only{" "}
                    <a
                      href="https://docs.google.com/spreadsheets/d/13JO906tAVoPW9m0F1I39bxB2UIu7E41NSbxIFIzT18I/edit#gid=1322321646"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      whitelisted referrals
                    </a>{" "}
                    are able to participate and receive rewards. The goal of
                    this is to help improve the security and productivity of the
                    Lido referral program.
                  </p>
                  <p>
                    Wallets, platforms, and protocols are welcome to apply for
                    whitelisting on Lido{" "}
                    <a
                      href="https://research.lido.fi/t/referral-program-whitelisting/1039"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      governance forum
                    </a>
                    .
                  </p>`,
  },
  {
    title: `How to claim referral reward?`,
    body: ` <p>
                    All previously approved rewards are available for claiming
                    on{" "}
                    <a
                      href="https://app.deversifi.com/claim/lido-rewards"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      DeversiFi
                    </a>{" "}
                    following the{" "}
                    <a
                      href="https://help.lido.fi/en/articles/5461071-claiming-rewards-for-the-lido-referral-program"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      claiming guide
                    </a>
                    . Starting from 13.10.2021 Lido Referral Program is
                    operating in whitelist mode which means that only{" "}
                    <a
                      href="https://docs.google.com/spreadsheets/d/13JO906tAVoPW9m0F1I39bxB2UIu7E41NSbxIFIzT18I/edit#gid=1322321646"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      whitelisted referrals
                    </a>{" "}
                    are able to participate and get rewards.
                  </p>`,
  },
];

const FaqSection = (props: Props) => {
  const [id, setId] = useState(0);
  const showFaqs = faqsData.map((faq: any, idx: number) => {
    return (
      <div
        className="AccordionStyles__AccordionStyle-sc-11dasyk-0 RCVjm"
        key={idx}
      >
        <div
          role="button"
          aria-expanded="false"
          className="AccordionStyles__AccordionSummaryStyle-sc-11dasyk-1 cvgaTS"
          onClick={() => {
            setId(idx == id ? 50 : idx);
          }}
        >
          <div className="AccordionStyles__AccordionTitleStyle-sc-11dasyk-2 hNXXEb">
            {faq.title}
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="AccordionStyles__AccordionArrowStyle-sc-11dasyk-3 ckaXtR"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.707 9.293a1 1 0 00-1.414 0L12 12.586 8.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
            ></path>
          </svg>
        </div>
        <div
          id="react-collapsed-panel-3"
          aria-hidden="true"
          style={{ display: `${idx == id ? "block" : "none"}` }}
        >
          <div className="AccordionStyles__AccordionContentStyle-sc-11dasyk-4 fBTNvJ">
            <div
              className={`sc-5a67ebfb-0 kQMVmL`}
              dangerouslySetInnerHTML={{ __html: faq.body }}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <section className="sc-a9101ce-0 gZOljP">
        <div className="sc-a9101ce-1 boFGQM">
          <h2 className="sc-a9101ce-2 hhXmPt">FAQ</h2>
        </div>
        <div className="sc-a9101ce-4 fQbIYX">{showFaqs}</div>
      </section>
    </>
  );
};

export default FaqSection;
