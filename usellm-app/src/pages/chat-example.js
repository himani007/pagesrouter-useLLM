function multiplyFunc(a, b) {
  return (
    <div>
      <h1>{a * b}</h1>
    </div>
  );
}

// export default function multiplyFunc(a, b) {
//   return a * b;
// }
export default function MultiplyExample(){
    return (<div>{multiplyFunc(10, 5)}</div>)
}


// {
//   <div>{multiplyFunc(10, 5)}</div>;
// }

