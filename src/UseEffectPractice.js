import { useState, useEffect } from 'react';

export default function UseEffectPractice() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 컴포넌트가 마운트되면 실행
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // 빈 배열 → 딱 한 번만

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
