
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:9090'

const Admin = () => {
  // 임시 저장글 목록을 저장할 state
  const [tempPosts, setTempPosts] = useState([]);
  // 페이지 이동을 위한 hook
  const navigate = useNavigate();

  // 컴포넌트가 처음 렌더링될 때 한 번만 실행
  useEffect(() => {
    const fetchTempPosts = async () => {
      try {
        // 실제 API 엔드포인트로 교체해야 합니다.
        const response = await axios.get(API_BASE_URL + '/admin/fundraisings/draft');
        setTempPosts(response.data); // 서버에서 받은 데이터로 state 업데이트
      } catch (error) {
        console.error('임시 저장글을 불러오는 중 오류가 발생했습니다.', error);
        // 테스트를 위해 임시 데이터 설정 (API 연동 전)
        const mockData = [
          { id: 1, title: '임시 저장글 불러오는 중 오류 발생.' },
        ];
        setTempPosts(mockData);
      }
    };

    fetchTempPosts();
  }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 설정

  // '모금 작성' 버튼 클릭 시 호출될 함수
  const handleCreateButtonClick = () => {
    navigate('/admin/fundraisings/editor'); // '/create-fundraising' 경로로 이동
  };

  const handleEdit = (draftId) => {
    // '/write' 경로로 이동하면서 state 객체에 draftId를 전달
    alert(draftId);
    navigate('/admin/fundraisings/editor', { state: { draftId: draftId } });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>임시 관리자 페이지</h2>

      {/* 모금 작성 버튼 */}
      <button
        onClick={handleCreateButtonClick}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        모금 작성
      </button>

      <hr style={{ margin: '20px 0' }} />

      <h3>임시 저장 글 목록</h3>
      {tempPosts.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0, width: '50rem' }}>
          {tempPosts.map(draft => (
            <li
              key={draft.fundraisingId}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <p><strong>제목:</strong> {draft.title}</p>
              <button onClick={() => handleEdit(draft.fundraisingId)}>수정하기</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>임시 저장된 글이 없습니다.</p>
      )}
    </div>
  );
}

export default Admin;