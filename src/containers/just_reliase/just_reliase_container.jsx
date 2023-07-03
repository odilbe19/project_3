import React from 'react'
import './just_reliase_container.css'

export default function JustReliaseContainer({ data }) {
  const iconStart = (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7891 3.62247L12.1091 6.26247C12.2891 6.62997 12.7691 6.98247 13.1741 7.04997L15.5666 7.44747C17.0966 7.70247 17.4566 8.81247 16.3541 9.90747L14.4941 11.7675C14.1791 12.0825 14.0066 12.69 14.1041 13.125L14.6366 15.4275C15.0566 17.25 14.0891 17.955 12.4766 17.0025L10.2341 15.675C9.82913 15.435 9.16163 15.435 8.74913 15.675L6.50663 17.0025C4.90163 17.955 3.92663 17.2425 4.34663 15.4275L4.87913 13.125C4.97663 12.69 4.80413 12.0825 4.48913 11.7675L2.62913 9.90747C1.53413 8.81247 1.88663 7.70247 3.41663 7.44747L5.80913 7.04997C6.20663 6.98247 6.68663 6.62997 6.86663 6.26247L8.18663 3.62247C8.90663 2.18997 10.0766 2.18997 10.7891 3.62247Z"
        fill="#FFCD1A"
      />
    </svg>
  );

  return (
    <div className='just_reliase_container'>
      <div className="just_reliase_component">
        <h1 className="just_reliase_component_h1">Just Release</h1>
        <div className="just_reliase_component_carousel">
          {
            data.map(item => {
              return (
                <div key={item.id} className="just_reliase_component_item">
                  <div className="just_reliase_component_item_desc">
                    <h4 className="just_reliase_component_item_desc_title">
                      {item.title}
                    </h4>
                    <div className="popular_components_movielist_item_title_desc_stars">
                      <span>{iconStart}</span> <h3>4.3</h3> <h4>| Mystery • Movie</h4>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
