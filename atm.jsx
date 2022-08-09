const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge" onChange = {onChange}>
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [messageState, setMessageState] = React.useState('');
  const [amount, setAmount] = React.useState(0);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAmount(Number(event.target.value));
  };
  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + amount : totalState - amount;
    let approvedTotal = ( newTotal < 0) ? totalState : newTotal;
    setTotalState(approvedTotal);
    let newMessage = (newTotal < 0) ? 'Transaction Denied: Lack of Funds' : '';
    setMessageState(newMessage);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
      <h3> {messageState}</h3>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
