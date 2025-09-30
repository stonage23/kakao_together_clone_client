// CustomEditor.js
import React, { useState, useMemo, useRef, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:9090";

const BlockEmbed = Quill.import('blots/block/embed');

class DivImage extends BlockEmbed {
  static create(value) {
    const node = super.create();
    const img = document.createElement('img');

    img.setAttribute('src', value.url);
    img.setAttribute('alt', 'image');
    img.setAttribute('imageId', value.imageId)
    node.appendChild(img);
    return node;
  }
  static value(node) {
    return node.querySelector('img').getAttribute('src');
  }
}
DivImage.blotName = 'figureImage';
DivImage.tagName = 'figure';
DivImage.className = 'image-container';
Quill.register(DivImage);

function AdminEditor() {
  const [formData, setFormData] = useState({
    fundraisingId: '',
    title: '',
    startDate: '',
    endDate: '',
    targetAmount: '',
    html: '', // 에디터의 HTML 내용
    agencyId: '',
    content: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // location.state에서 draftId를 안전하게 추출 (optional chaining)
    const draftId = location.state?.draftId;

    if (draftId) {
      // draftId가 존재하면, 서버에 임시 글 데이터 요청
      alert(`임시 글 ${draftId}를 불러옵니다.`);

      const fetchDraft = async () => {
        try {
          // 실제 API 엔드포인트로 수정하세요.
          const response = await axios.get(BASE_URL + `/admin/fundraisings/draft/${draftId}`);
          console.log(response);
          setFormData(response.data);
        } catch (error) {
          console.error("임시 글을 불러오는데 실패했습니다.", error);
          alert("임시 글을 불러올 수 없습니다.");
        }
      };

      fetchDraft();
    } else {
      // draftId가 없으면, 새 글 작성 모드
      alert("새 글 작성 모드입니다.");
    }
  }, [location.state]); // location.state가 바뀔 때마다 useEffect 재실행

  // 2. onChange 핸들러: 모든 input의 변경을 이 함수 하나로 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " " + value);
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuillChange = (content) => {
    setFormData(prev => ({ ...prev, html: content }));
    console.log(formData.html);
  };

  const [action, setAction] = useState('');
  const quillRef = useRef();


  const imageHandler = () => {
    // 1. 이미지를 저장할 input type="file" 엘리먼트 생성
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*'); // 이미지 파일만 보이게(사용자편의)
    input.click(); // 에디터의 이미지 버튼을 클릭하면 이 input이 열림

    // 2. 이미지를 선택하면
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file); // formData는 키-값 구조

      try {
        // 3. 서버에 이미지를 보냄
        const response = await axios.post('http://localhost:9090/files/temp', formData);
        const url = response.data.url;
        const imageId = response.data.id;

        const imagePayload = {
          url: url,
          imageId: imageId
        }

        // 4. 서버로부터 받은 이미지 URL을 에디터에 삽입
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        const range = editor.getSelection(true);
        editor.insertEmbed(range.index, 'figureImage', imagePayload); // 커서 위치에 이미지 삽입
        editor.setSelection(range.index + 1);
        console.log("이미지 임시 업로드 성공");
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
        alert(error.response.data.message);
      }
    };
  };

  // 툴바 옵션을 useMemo로 캐싱하여 불필요한 렌더링을 방지합니다.
  const modules = useMemo(() => ({
    toolbar: {
      // 툴바에 넣을 기능들을 순서대로 나열합니다.
      container: [
        [{ 'header': 2 }], // h1, h2, h3 태그
        ['image'], // 이미지 업로드 버튼
      ],
      handlers: {
        'image': imageHandler,
      }
    },
  }), []);

  // 폼 제출 시 실행될 메인 함수
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title) {
      alert('제목은 필수입력입니다.');
      return;
    }



    try {
      if (action === 'draft') {
        // '임시 저장' API 호출
        const response = await axios.post( BASE_URL + '/admin/fundraisings/draft', formData);
        alert('임시 저장되었습니다.');
        console.log(response.data);
        navigate("/admin");
      } else if (action === 'publish') {
        // '발행' API 호출
        const response = await axios.post(BASE_URL + '/admin/fundraisings', formData);
        alert('성공적으로 발행되었습니다.');
        console.log(response.data);
        navigate("/admin");
      }
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* 각 버튼 클릭 시 action state를 변경하고, type="submit"으로 폼 제출을 트리거 */}
        <button type="submit" onClick={() => setAction('draft')}>
          임시 저장
        </button>
        <button type="submit" onClick={() => setAction('publish')} style={{ marginLeft: '10px' }}>
          발행하기
        </button>
        {/*<input*/}
        {/*  type="text"*/}
        {/*  value={title}*/}
        {/*  onChange={(e) => setTitle(e.target.value)}*/}
        {/*  placeholder="제목을 입력하세요"*/}
        {/*  style={{ width: '100%', padding: '10px', marginBottom: '10px' }}*/}
        {/*/>*/}
        <h2>모금 정보 입력</h2>

        {/* 각 input의 name 속성을 state의 key와 일치시키는 것이 중요 */}
        <div style={{ marginBottom: '15px' }}>
          <label>제목</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="제목을 입력하세요"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>시작일</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            style={{ width: '100px', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>종료일</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            style={{ width: '100px', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>목표 금액</label>
          <input
            type="number"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            placeholder="숫자만 입력하세요"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>기관 ID</label>
          <input
            type="text"
            name="agencyId"
            value={formData.agencyId}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <ReactQuill
          ref={quillRef}
          theme="snow"
          name="content"
          value={formData.html}
          onChange={handleQuillChange}
          style={{ height: '300px', marginBottom: '50px' }}
          modules={modules}
        />
      </form>

    </div>
  );
}

export default AdminEditor;