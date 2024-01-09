import Navbar from '../Navbar';


const Projects = () => {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '10px',
    padding: '50px 20px 20px 20px', 
  };

  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(9deg, rgba(65,9,121,0.7)50%, rgba(0,212,255,0.7)100%)',
    border: '1px solid gray',
    height: '100px',
    textAlign: 'center',
  };

  const smallBoxStyle = {
    ...boxStyle,
    gridColumnEnd: 'span 3',
  };

  const mediumBoxStyle = {
    ...boxStyle,
    gridColumnEnd: 'span 6',
  };

  const largeBoxStyle = {
    ...boxStyle,
    gridColumnEnd: 'span 9',
  };

  return (
    <div style={{background:"linear-gradient(9deg, rgba(65,9,121,0.7)50%, rgba(0,212,255,0.7)100%)",}}>
    <Navbar />
    <div style={gridContainerStyle}>
      <div style={largeBoxStyle}>1</div>
      <div style={smallBoxStyle}>2</div>
      <div style={mediumBoxStyle}>3</div>
      <div style={largeBoxStyle}>4</div>
      <div style={smallBoxStyle}>5</div>
      <div style={smallBoxStyle}>6</div>
      <div style={largeBoxStyle}>7</div>
      <div style={mediumBoxStyle}>8</div>
      <div style={smallBoxStyle}>9</div>
      <div style={largeBoxStyle}>10</div>
      <div style={smallBoxStyle}>11</div>
      <div style={largeBoxStyle}>12</div>
    </div>
    </div>
  );
};

export default Projects;
