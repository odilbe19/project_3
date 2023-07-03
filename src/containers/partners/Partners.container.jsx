import React from 'react'
export default function Partners({ data }) {
    return (
        <div className='Partners_container'>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className="Partners_container_card">
                            <img src={item.img_url} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
