import React from "react";

const Tender = () => {
  return (
    <div>
      <form id="FormId" method="POST">
        <div className="form-group row">
          <label className="control-label col-lg-3 mandatory">
            Tender Number
          </label>

          <div className="col-lg-6">
            <input
              id="documentNo"
              name="documentNo"
              type="text"
              className="form-control"
              value=""
            />
          </div>

          <div className="errored" id="documentNo_error">
            This Field Is Required
          </div>
        </div>

        <div className="form-group row">
          <label className="control-label col-lg-3 mandatory">Subject</label>
          <div className="col-lg-6">
            <input
              id="subject"
              name="subject"
              type="text"
              className="form-control"
              value=""
            />
          </div>

          <div className="errored" id="subject_error">
            This Field Is Required
          </div>
        </div>

        <div className="form-group row">
          <label className="control-label col-lg-3 mandatory">Start Date</label>

          <div className="col-lg-6">
            <div className="input-group date" id="issueDate_datepicker">
              <input
                id="issueDate"
                name="issuedDate"
                placeholder="dd/mm/yyyy"
                className="form-control"
                type="text"
                value=""
              />
              <span className="input-group-addon">
                {" "}
                <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
          <div className="errored" id="issueDate_error">
            This Field Is Required
          </div>
        </div>

        <div className="form-group row">
          <label className="control-label col-lg-3 mandatory">
            Tender Bid Opening Date
          </label>
          <div className="col-lg-6">
            <div
              className="input-group date"
              id="tenderBidOpeningDate_datepicker"
            >
              <input
                id="tenderBidOpeningDate"
                name="tenderBidOpeningDate"
                placeholder="dd/mm/yyyy"
                className="form-control"
                type="text"
                value=""
              />
              <span className="input-group-addon">
                {" "}
                <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
          <div className="errored" id="tenderBidOpeningDate_error">
            This Field Is Required
          </div>
        </div>

        <div className="form-group row">
          <label className="control-label col-lg-3 mandatory">
            Tender Bid Closing Date
          </label>
          <div className="col-lg-6">
            <div
              className="input-group date"
              id="tenderBidClosingDate_datepicker"
            >
              <input
                id="tenderBidClosingDate"
                name="tenderBidClosingDate"
                placeholder="dd/mm/yyyy"
                className="form-control"
                type="text"
                value=""
              />
              <span className="input-group-addon">
                {" "}
                <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
          <div className="errored" id="tenderBidClosingDate_error">
            This Field Is Required
          </div>
        </div>

        <div className="form-group row">
          <label className="control-label col-lg-3 mandatory">Issued By</label>
          <div className="col-lg-6">
            <input
              id="issuedBy"
              name="issuedBy"
              type="text"
              className="form-control"
              value=""
            />
          </div>
          <div className="errored" id="issuedBy_error">
            This Field Is Required
          </div>
        </div>

        <div className="form-group row">
          <label className="control-label col-lg-3 mandatory">
            Attach File
          </label>
          <div className="col-lg-6">
            <input id="attachFile" name="attachFile" type="file" value="" />
          </div>

          <div className="errored" id="attachFile_error">
            This Field Is Required
          </div>
        </div>
      </form>
    </div>
  );
};

export default Tender;
