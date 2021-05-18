import React from "react";

export default function SearchForm({ setSearchTerm }) {
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchValue = React.useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const searchcocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <div>
      <h2 className="section-title">cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Search cocktail..."
            onChange={searchcocktail}
            ref={searchValue}
          />
          <i className="fas fa-cocktail"></i>
        </div>
      </form>
      </div>
     
    </section>
  );
}
