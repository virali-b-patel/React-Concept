import React, { Component } from "react";
import "./App.css";
import "./appStyles.css";
import Greet from "./concepts/Greet";
import Welcome from "./concepts/Welcome";
import Hello from "./concepts/Hello";
import Message from "./concepts/Message";
import Counter from "./concepts/Counter";
import FunctionClick from "./concepts/FunctionClick";
import ClassClick from "./concepts/ClassClick";
import EventBind from "./concepts/EventBind";
import ParentComponent from "./concepts/ParentComponent";
import UserGreeting from "./concepts/UserGreeting";
import NameList from "./concepts/NameList";
import Stylesheet from "./concepts/Stylesheet";
import Inline from "./concepts/Inline";
import styles from "./appStyles.module.css";
import Form from "./concepts/Form";
import LifecycleA from "./concepts/LifecycleA";
import FragmentDemo from "./concepts/FragmentDemo";
import Table from "./concepts/Table";
import PureComp from "./concepts/PureComp";
import ParentComp from "./concepts/ParentComp";
import RefsDemo from "./concepts/RefsDemo";
import FocusInput from "./concepts/FocusInput";
import FRParentInput from "./concepts/FRParentInput";
import PortalDemo from "./concepts/PortalDemo";
import Hero from "./concepts/Hero";
import ErrorBoundary from "./concepts/ErrorBoundary";
import ClickCounter from "./concepts/ClickCounter";
import HoverCounter from "./concepts/HoverCounter";
import ClickCounterTwo from "./concepts/ClickCounterTwo";
import HoverCounterTwo from "./concepts/HoverCounterTwo";
import User from "./concepts/User";
import CounterTwo from "./concepts/CounterTwo";
import ComponentC from "./concepts/ComponentC";
import { UserProvider } from "./concepts/userContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import HooksMaster from "./Hooks/HooksMaster";
import Components from "./Hooks/Components";
import DataFetchingOne from "./Hooks/DataFetchingOne";
import DataFetchingTwo from "./Hooks/DataFetchingTwo";
import ParentComponentTwo from "./HooksPartTwo/ParentComponentTwo";
import FocusInputTwo from "./HooksPartTwo/FocusInputTwo";
import HooksTwoMaster from "./HooksPartTwo/HooksTwoMaster";
import ReactRender from "./reactRender/ReactRender";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* This reactRender is all for ReactRender */}
        <ReactRender />
        {/* This HooksTwoMaster is for all  HooksPartTwo in react    */}
        {/* <HooksTwoMaster /> */}
        {/* <DataFetchingTwo /> */}
        {/* <DataFetchingOne /> */}
        {/* <Components /> */}
        {/* This Hookmaster is for all hooks in react */}
        {/* <HooksMaster /> */}
        {/* <PostForm /> */}
        {/* <PostList /> */}
        {/* <UserProvider value="virali"> */}
        {/* <ComponentC /> */}
        {/* </UserProvider> */}
        {/* <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => (isLoggedIn ? "Virali" : "Guest")} /> */}
        {/* <ClickCounter name="Virali" /> */}
        {/* <HoverCounter /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Spider" />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className="error">Error</h1> p*/}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Virali" heroName="beautyQueen">
          <p>This is Women props</p>
        </Greet>
        <Greet name="Vijay" heroName="handsomeBoy" />
        <button>Action</button>
        <Greet name="Patel" heroName="surName" />
        <Welcome name="Virali" heroName="beautyQueen" />
        <Welcome name="Vijay" heroName="handsomeBoy" />
        <Welcome name="Patel" heroName="surName" /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}
