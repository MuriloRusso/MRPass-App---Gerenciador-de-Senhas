import { Folder } from "@/types/folder";
import { useEffect, useState } from "react";

export default function useGetList() {

  const [rows, setRows] = useState<Folder[]>([
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   title: 'First Item',
    // },
    // {
    //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //   title: 'Second Item',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //   title: 'Third Item',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d75',
    //   title: 'Third Item',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d76',
    //   title: 'Third Item',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d77',
    //   title: 'Third Item',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d70',
    //   title: 'Thirddd Item',
    // },
  ]);

  useEffect(()=>{
    try {
      const route = 'https://mrpass.shop/api/';
  
      let myResponse = fetch(`${route}folders/search.php`, {
          method: 'GET',
      })
      .then((response) => {
          response.json().then((data) => {
              console.log(data);
              setRows(data.folders);
          })
      })
    } catch (error) {
      console.log(error);
    }

  }, [])
    
  return {rows}
}