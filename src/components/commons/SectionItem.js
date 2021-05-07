import React from "react";

export default function SectionItem(props) {
  const {
    className,
    title,
    subtitle,
    totalViews,
    documents,
    actionText,
    actionIcon
  } = props;
  return (
    <>
      {!actionText ? (
        <div className={`section__item ${className}`}>
          {title && <h3 className="txt-subsubtitle">{title}</h3>}
          <div
            className={`section__item__text ${documents &&
              "section__item__text--documents"}`}
          >
            <h4 className="txt-body txt-body--bold">{subtitle}</h4>
            {totalViews && (
              <p className="txt-body txt-body--bold txt-body--small">
                {totalViews} views
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="section__item section__item--action">
          <div className="section__item__icon">
            <i className={actionIcon} />
          </div>
          <p className="txt-body">{actionText}</p>
        </div>
      )}
    </>
  );
}
