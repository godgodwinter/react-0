import toast, { Toaster } from "react-hot-toast";
import Table from "@/components/atoms/DataTableExample";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/stores/counterSlice";
import { useState, useEffect } from "react";

const notify = () => toast("Here is your toast.");
const notifySuccess = () => toast.success("Here is your toast Success.");
const notifyError = () => toast.error("Here is your toast Error.");
const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [jmlClick, setJmlClick] = useState(0);
  const handleClick = () => {
    setJmlClick(jmlClick + 1);
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${jmlClick} times`;
  });
  const startDate = new Date().toLocaleTimeString();
  
  const[sec, setSec] = useState(0);


  useEffect(() => {
  //  setTimeout(() => setSec((sec) => sec + 1), 1000);
  setTimeout(() => setSec(startDate), 1000);
    return () => {};
  }, [sec]);  //dependency, if end changes remount

  return (
    <div>
      <div className="py-4 px-4 space-x-4">
<div className="py-4 px-4">Date Now : {sec}</div>

        <span>Redux Examples : </span>
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <span>{count}</span>
      </div>
      <div className="py-4 px-4 space-x-2">
        <span>Toast Examples : </span>
        <button className="btn btn-sm" onClick={notify}>
          NOTIF
        </button>
        <button className="btn btn-sm btn-success" onClick={notifySuccess}>
          SUCCESS
        </button>
        <button className="btn btn-sm btn-error" onClick={notifyError}>
          ERROR
        </button>
        <Toaster />
      </div>

      <div className="py-4 px-4">
        <p>Latihan useState & use Effect = clicked : {jmlClick} x</p>

        <div>
          <button className="btn" onClick={handleClick}>
            KLik
          </button>
        </div>
      </div>
      <div className="py-4 px-4">
        <Table />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi Peeps</h1>
            <p className="py-6">This is my first App made with React JS.</p>
            <button className="btn btn-primary">Get Started</button>
            <article className="prose lg:prose-xl py-20">
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
