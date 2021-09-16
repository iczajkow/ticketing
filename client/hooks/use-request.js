import axios from "axios";
import { useState } from "react";
import Router from 'next/router';

const useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Oooops...</h4>
          <ul className="my-0"></ul>
          {err.response.data.errors.map((err) => (
            <li key={err.message}>{err.message}</li>
          ))}
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;