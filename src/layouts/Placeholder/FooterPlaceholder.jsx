import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FooterPlaceholder = () => {
  return (
    <>
        <div className='container my-5'>
            <div className='row py-2'>
                <div className='col-md-12 text-center'>
                    <Skeleton height={30} width={300} />
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-md-12 text-center'>
                    <Skeleton height={30} />
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-md-10 text-center offset-1'>
                    <Skeleton height={10} count={2} />
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-md-6 text-center offset-3'>
                    <Skeleton height={10} />
                </div>
            </div>
        </div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 my-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <Skeleton circle={true} height={50} width={50}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterPlaceholder
