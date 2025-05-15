import useFields from "../useFields";

export default function useGetBySearch() {

  const {rows, setRows} = useFields();

  const search = async (searchText: string) => {
    try {
      const route = 'https://mrpass.shop/api/register/search.php?id=10&search=' + encodeURIComponent(searchText);
      const response = await fetch(route, { method: 'GET' });
      const data = await response.json();

      console.log("Resultado da busca:", data);
      // setRows(Array.isArray(data.folders) ? data.folders : []);
      setRows([])

    } catch (error) {
      console.error("Erro na busca:", error);
      setRows([]);
    }
  };

  return { search, rows };
}
