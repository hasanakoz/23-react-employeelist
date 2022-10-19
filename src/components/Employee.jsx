const Employee = ({ person }) => {
  console.log(person);

  return (
    <>
      {person.map((emp, index) => {
        return (
          <article className="person-card" key={index}>
            <img src={emp.image} alt="" />
            <div className="person-text">
              <h4>{emp.name}</h4>
              <p>{emp.email}</p>
              <p>{emp.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Employee;
