import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components/common/Loading";
import axiosInstance from "../../config/axios";

export const HomePage: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const result = await axiosInstance.get('/users/last-user');
      history.push('/chat/' + result.data[0]['_id']);
    }
  }, [])

  if (loading) return <Loading />
  return (
    <div>chat</div>
  )
}