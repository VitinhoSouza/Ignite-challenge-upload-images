import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    {
      queryKey: ['images'],
      // TODO AXIOS REQUEST WITH PARAM
      queryFn:  async ({ pageParam = null })=>{
                  const res = await api.get(`/api/images?after=${pageParam}`);
                  return res.data;
                },
      // TODO GET AND RETURN NEXT PAGE PARAM
      getNextPageParam: (after) => after || null,
    }
  );

  const formattedData = useMemo(() => {
    return data?.pages[0].data || [];
  }, [data]);

  // TODO RENDER LOADING SCREEN
  if(isLoading){
    return(
      <Loading/>
    )
  }

  // TODO RENDER ERROR SCREEN
  if(isError){
    return(
      <Error/>
    )
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}

        {isFetchingNextPage
            ? 'Carregando...'
            : hasNextPage
            ? <Button onClick={()=>fetchNextPage}>Carregar mais</Button>
            : ''}
      </Box>
    </>
  );
}
