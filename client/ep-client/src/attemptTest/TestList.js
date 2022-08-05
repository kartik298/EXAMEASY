import React, { useState, useEffect } from "react";
import { Button } from "antd";
import SearchBox from "../homeComponents/SearchBox";
import { useHistory } from "react-router-dom";
import { Skeleton } from "antd";

export default function TestList(props) {
  const history = useHistory();
  const [tests, setTests] = useState([]);
  const [searchTests, setSearchTests] = useState([]);
  const [searching, setSearching] = useState("");
  const heading = props.heading;

  useEffect(() => {
    setTests(props.tests.reverse());
  }, [props]);

  const handleListData = (searchTerm) => {
    if (searchTerm === "") setSearching(searchTerm);
    else {
      setSearching(true);
      setSearchTests(
        tests.filter((test) => test.testName.toLowerCase().includes(searchTerm))
      );
    }
  };

  let selectRef,
    selectedData = {};

  const handleButtonClick = () => {
    props.handleSelectedTest(selectedData);
    history.push("/test-instructions");
  };

  const handleSelectTest = (e, index) => {
    if (selectRef) {
      selectRef.classList.remove("selected__test");
    }
    selectRef = e.currentTarget;
    e.currentTarget.classList.add("selected__test");
    selectedData = tests[index];
  };

  return (
    <>
      <div className="select__test__wrapper">
        <p className="test__wrapper__heading">{heading}</p>
        <div className="select__test__search__box">
          <p className="search__box__heading">Search Test</p>
          {<SearchBox handleListData={handleListData} />}
          {tests.length == 0 && 
            <div className="no__results">
            No results found.
            </div>
          }
          {tests.length > 0 &&
          <div className="test__wrapper__body">
            <p className="test__wrapper__heading select__heading">
              Select Test
            </p>
            <div className="select__test__body">
              {tests.length > 0 ? (
                searching !== "" ? (
                  searchTests.map((test, index) => (
                    <div
                      key={index}
                      className={`test__wrapper`}
                      onClick={(e) => {
                        handleSelectTest(e, index);
                      }}
                    >
                      <p className="select__test" key={index}>
                        {test.testName}
                      </p>
                      <div className="test__time">
                        <p className="time start">
                          Published On: Nov 26 2021 11:30AM
                        </p>
                        <p className="time end">
                          Attempted On: Nov 29 2021 10:30 PM
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  tests.map((test, index) => (
                    <div
                      key={index}
                      className={`test__wrapper`}
                      onClick={(e) => {
                        handleSelectTest(e, index);
                      }}
                    >
                      <p className="select__test" key={index}>
                        {test.testName}
                      </p>
                      <div className="test__time">
                        <p className="time start">
                          Published On: Nov 26 2021 11:30AM
                        </p>
                        <p className="time end">
                          Attempted On: Nov 29 2021 10:30 PM
                        </p>
                      </div>
                    </div>
                  ))
                )
              ) : (
                <div className="select__skeleton">
                  <div className="select__single-skeleton">
                    <Skeleton.Avatar
                      className="select__avatar-skelton"
                      active={true}
                      size="default"
                      shape="square"
                    />
                    <Skeleton.Input
                      className="select__input-skelton"
                      active={true}
                      size="default"
                    />
                  </div>
                  <div className="select__single-skeleton">
                    <Skeleton.Avatar
                      className="select__avatar-skelton"
                      active={true}
                      size="default"
                      shape="square"
                    />
                    <Skeleton.Input
                      className="select__input-skelton"
                      active={true}
                      size="default"
                    />
                  </div>
                  <div className="select__single-skeleton">
                    <Skeleton.Avatar
                      className="select__avatar-skelton"
                      active={true}
                      size="default"
                      shape="square"
                    />
                    <Skeleton.Input
                      className="select__input-skelton"
                      active={true}
                      size="default"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          }
        </div>
        {tests.length > 0 &&
        <div className="select__button">
          <Button type="primary" onClick={handleButtonClick}>
            Continue
          </Button>
        </div>
        }
      </div>
    </>
  );
}