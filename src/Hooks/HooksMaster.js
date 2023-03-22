import React, { Component } from "react";
import ClassCounter from "./ClassCounter";
import HookCounter from "./HookCounter";
import HookCounterTwo from "./HookCounterTwo";
import HookCounterThree from "./HookCounterThree";
import HookCounterFour from "./HookCounterFour";
import ClassCounterOne from "./ClassCounterOne";
import HookCounterOne from "./HookCounterOne";
import ClassMouse from "./ClassMouse";
import HookMouse from "./HookMouse";
import MouseContainer from "./MouseContainer";
import IntervalClassCounter from "./IntervalClassCounter";
import IntervalHookCounter from "./IntervalHookCounter";
import DataFetching from "./DataFetching";
import ComponentC from "./ComponentC";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";
import ClassCounterTwo from "./ClassCounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

class HooksMaster extends Component {
  render() {
    return (
      <div>
        {/* <CounterThree />s */}
        <CounterTwo />
        {/* <CounterOne /> */}

        {/* <UserContext.Provider value={"virali"}>
          <ChannelContext.Provider value={"Disnep+ HotStar"}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}

        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <ClassCounterTwo /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}
      </div>
    );
  }
}

export default HooksMaster;
