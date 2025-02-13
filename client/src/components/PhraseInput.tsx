import React from "react";

const PhraseInput = () => {
  return (
    <div className="mt-auto mb-auto">
      <div className="flex justify-center items-center ml-5 mr-5 pt-5">
        <div className="flex w-full flex-col lg:flex-row">
          <textarea className="card bg-base-300 rounded-box grid h-32 flex-grow lg:min-h-96"></textarea>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center lg:min-h-96">
            content
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhraseInput;
