import { useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

// make API calls and pass the returned data via dispatch
export const useFetch = (data, dispatch) => {
  const url = `http://www.mocky.io/v2/5ed68221340000480106dae9​`;
  // const url = `http://www.mocky.io/v2/5ed68221340000480106vdsfvsdae9​`;

  useEffect(() => {
    dispatch({ type: 'FETCHING_PRODUCTS', loading: true, error: false })

    if (data.page < 3) {
      axios.get(url)
        .then(response => {
          dispatch({
            type: 'STACK_PRODUCTS',
            data: response.data,
          })
          dispatch({
            type: 'FETCHING_PRODUCTS',
            loading: false, 
            error: false
          })
        })
        .catch(e => {
          // handle error
          dispatch({
            type: 'FETCHING_PRODUCTS',
            loading: false,
            error: true
          })
          return e
        })
    }
  }, [dispatch, data.page])
}

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' });
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}

// lazy load images with intersection observer
export const useLazyLoading = (productSelector, items) => {
  const productObserver = useCallback(node => {
    const intObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.intersectionRatio > 0) {
          const currentImg = en.target;
          const newImgSrc = currentImg.dataset.src;

          // only swap out the image source if the new exists
          if (!newImgSrc) {
            console.error('product is invalid');
          } else {
            currentImg.src = newImgSrc;
          }
          intObs.unobserve(node);
        }
      });
    })
    intObs.observe(node);
  }, []);

  const productsRef = useRef(null);

  useEffect(() => {
    productsRef.current = document.querySelectorAll(productSelector);
    if (productsRef.current) {
      productsRef.current.forEach(product => productObserver(product));
    }
  }, [productObserver, productsRef, productSelector, items])
}