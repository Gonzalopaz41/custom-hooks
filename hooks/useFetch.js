import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError:false,
    error:null
  });

  useEffect(() => {
    
    getFech();

  }, [url])

  
  const setLoadingState = () => {

    setState({
      data: null,
      isLoading: true,
      hasError:false,
      error:null
    })
  }
  
  const getFech = async () => {
    
    setLoadingState();
    const resp = await fetch(url);

    //Sleep

    await new Promise(resolve => setTimeout(resolve, 2000))

    if(!resp.ok){
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      })
      return;
    }

    const data = await resp.json();
    
    setState({
      data: data,
      isLoading: false,
      hasError:false,
      error:null
    });
    
    console.log({data})
  
  };
  
  return{
    data: state.data,
    isLoading:state.isLoading,
    hasError: state.hasError
  }
}
