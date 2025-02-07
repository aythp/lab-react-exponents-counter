const ExponentTwo = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{count * count}</span></p>
  </div>
);

export default ExponentTwo;