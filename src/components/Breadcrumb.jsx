import React from "react";

const Breadcrumb = ({ items, type }) => {
  console.log("Items : ", items);

  // <nav aria-label="breadcrumb">
  //   <ol class="breadcrumb">
  //     <li class="breadcrumb-item">
  //       <a href="#">Home</a>
  //     </li>
  //     <li class="breadcrumb-item">
  //       <a href="#">Library</a>
  //     </li>
  //     <li class="breadcrumb-item active" aria-current="page">
  //       Data
  //     </li>
  //   </ol>
  // </nav>;

  const renderItems = (items) => {
    return items.map((item, idx) => {
      return (
        <li key={item.id} className="breadcrumb-item">
          {idx == items.length - 1 ? (
            <>{item.label}</>
          ) : (
            <a href={item.path}>{item.label}</a>
          )}
        </li>
      );
    });
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">{renderItems(items)}</ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
