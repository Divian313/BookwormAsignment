import "./feature.css";
import Card from "../Card/Card";

function Feature({ list }) {
  const renderListItem = (list) => {
    let xhtml = [];
    xhtml = list.map((book) => {
      return (
        <div className="col-6 col-sm-3 product-list-item">
          <Card item={book} />
        </div>
      );
    });
    return xhtml;
  };

  return (
    <div className="products-list">
      <div className="row">{list.length ? renderListItem(list) : null}</div>
    </div>
  );
}

export default Feature;
