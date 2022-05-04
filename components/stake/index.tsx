import React from "react";

type Props = {};

const StakeSection = (props: Props) => {
  return (
    <>
      <h1 className="HeadingStyles__H1Style-sc-u5f2uf-1 kbIRBt sc-47bc8910-0 cZvDAm">
        Stake Ether
      </h1>
      <h4 className="sc-47bc8910-1 jGkRpa">
        Stake ETH and receive stETH while staking.
      </h4>
      <div className="BlockStyles__BlockStyle-sc-x6m4g3-0 gGlYvb">
        <form action="" method="post" className="sc-ea44d61c-1 gwWoYo">
          <label className="InputStyles__InputWrapperStyle-sc-kdtshm-0 NvTIL sc-ea44d61c-0 iNuBsP">
            <span className="InputStyles__InputLeftDecoratorStyle-sc-kdtshm-5 eLKzAr">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  opacity="0.6"
                  d="M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"
                ></path>
                <path d="M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"></path>
                <path
                  opacity="0.6"
                  d="M11.999 16.103v4.143l5.251-7.135L12 16.103z"
                ></path>
                <path d="M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"></path>
                <path
                  opacity="0.2"
                  d="M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"
                ></path>
                <path
                  opacity="0.6"
                  d="M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"
                ></path>
              </svg>
            </span>
            <span className="InputStyles__InputContentStyle-sc-kdtshm-1 kJqZxf">
              <input
                type="text"
                placeholder="0"
                aria-invalid="false"
                defaultValue=""
                className="InputStyles__InputStyle-sc-kdtshm-2 ePlVZQ"
              />
              <span className="LabelStyles__InputLabelStyle-sc-1wukku1-0 leFGzX">
                Amount
              </span>
            </span>
            <span className="InputStyles__InputRightDecoratorStyle-sc-kdtshm-6 fDeUkP">
              <button
                type="button"
                className="ButtonStyles__ButtonStyle-sc-gzfh1w-0 zNtuO sc-ea44d61c-2 iFepXX"
              >
                <span className="ButtonStyles__ButtonContentStyle-sc-gzfh1w-2 cqwTHO">
                  MAX
                </span>
              </button>
            </span>
          </label>
          <button
            type="button"
            className="ButtonStyles__ButtonStyle-sc-gzfh1w-0 jUOpFT"
          >
            <span className="ButtonStyles__ButtonContentStyle-sc-gzfh1w-2 cqwTHO">
              Connect wallet
            </span>
          </button>
        </form>
        <div className="DataTableStyles__DataTableStyle-sc-ipz6cg-0 kPzRBq">
          <div className="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 eSCbdf">
            <div className="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 ggzSDS">
              You will receive
            </div>
            <div className="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 hTEOSI">
              {"0<!-- --> stETH"}
            </div>
          </div>
          <div className="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 eSCbdf">
            <div className="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 ggzSDS">
              Exchange rate
            </div>
            <div className="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 hTEOSI">
              1 ETH = 1 stETH
            </div>
          </div>
          <div className="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 eSCbdf">
            <div className="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 ggzSDS">
              Transaction cost
            </div>
            <div className="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 hTEOSI">
              $14.31
            </div>
          </div>
          <div className="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 eSCbdf">
            <div className="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 ggzSDS">
              Reward fee
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="DataTableStyles__DataTableQuestionStyle-sc-ipz6cg-4 cVMjpA"
              >
                <path d="M12.188 9.109a1.455 1.455 0 00-1.618.95.727.727 0 01-1.372-.482 2.91 2.91 0 015.653.97c0 1.112-.826 1.847-1.415 2.24a5.64 5.64 0 01-1.262.63.735.735 0 01-.922-.46.727.727 0 01.46-.92c.322-.113.633-.271.917-.46.502-.335.767-.69.767-1.032a1.454 1.454 0 00-1.208-1.436zM12 15.636a.727.727 0 100-1.454.727.727 0 000 1.454z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-6.545a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09z"
                ></path>
              </svg>
            </div>
            <div className="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 hTEOSI">
              10%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakeSection;
