# 카카오같이가치 프론트 클론코딩

🔗https://together.kakao.com/

카카오 같이 가치 클론코딩 개인프로젝트에서 백엔드에서 구현한 기능을 UI으로 확인해볼 수 있도록 구현하였습니다.<br>
현재 repository에는 mock데이터가 들어가 있어 서버연동을 하지 않아도 확인이 가능하지만, 핵심 기능에 대한 서버 API는 연동이 되어있습니다.

### 🔎 주요 포인트
- 반응형 UI
- 재사용 가능하도록 컴포넌트를 구성


### ⚙️ 기술
<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
</div>

## 🔎 주요 화면
- 헤더
- 메인 
- 모금 스토리
- 기부
  
---

<br><br><br>

### 🖥️ 메인 페이지
<img width="916" height="1240" alt="image" src="https://github.com/user-attachments/assets/72816d0e-eb7a-47f5-acaa-412b5d98b6d6" />
<br><br>
🏷️ 표준 화면<br>
<img width="916" height="1240" alt="image" src="https://github.com/user-attachments/assets/72816d0e-eb7a-47f5-acaa-412b5d98b6d6" />
<br><br>
🏷️ 뷰표트 가로길이 변화에 따른 UI 변화<br>
<img width="490" height="1341" alt="image" src="https://github.com/user-attachments/assets/b1615062-8ccd-4065-bdf4-ebb72e05d33d" />

<br><br>
🏷️ 부트스트랩 Slider, Progressbar, Card 응용 <br>
<img width="286" height="215" alt="image" src="https://github.com/user-attachments/assets/ca3dd13c-b3df-49ce-983b-46c4636bc73c" />
<img width="264" height="44" alt="image" src="https://github.com/user-attachments/assets/5e176d25-add7-40d8-83ad-ed71752bcb7b" />
<img width="175" height="203" alt="image" src="https://github.com/user-attachments/assets/06727212-9af6-43ac-b76a-162e957d0166" />

<br><br>
🏷️ 남은시각 타이머<br>
<img width="211" height="101" alt="image" src="https://github.com/user-attachments/assets/d3d4e455-0c8c-41bf-af31-c8edad10d95a" />
<br><br>
반응형 타이머 UI 디자인에 차별<br>
<img width="485" height="487" alt="image" src="https://github.com/user-attachments/assets/e5447f0d-4f77-413e-bf5f-4580948cc224" />


🏷️ 태그별 조회 UI<br>
UI만 구현하였습니다. <br>
<img width="556" height="140" alt="image" src="https://github.com/user-attachments/assets/f915a96e-5fde-4096-bd5d-6b331247046e" />
<br><br><br>

### 🖥️ 헤더
🏷️ 표준화면<br>
<img width="925" height="63" alt="image" src="https://github.com/user-attachments/assets/23379f21-dca8-43f1-a8c3-dc011c4c1ea9" />
<br><br>
🏷️ 뷰포트 가로길이 변화에 따른 UI 변화<br>
<img width="498" height="88" alt="image" src="https://github.com/user-attachments/assets/0dbe12d3-a113-4166-8713-feac5c0e8244" />

<br><br>
🏷️ 우측 상단 메뉴버튼 클릭시 우측 사이드에서 메뉴창 슬라이드인<br>
<img width="675" height="225" alt="image" src="https://github.com/user-attachments/assets/ae9d6c35-1655-4b0a-9176-ebec0fc4c1d1" />
<img width="373" height="615" alt="image" src="https://github.com/user-attachments/assets/b5b285e4-0edf-466e-af77-10a6045573ff" />

<br><br><br>
### 🖥️ 모금 스토리
모금 스토리 게시글의 경우 서버와 연동할 경우 에디터로 작성한 글이 서버에 저장 불러올 수 있습니다. <br>
🏷️ 표준 화면<br>
<img width="955" height="1452" alt="image" src="https://github.com/user-attachments/assets/68d48a20-572b-415c-bebf-aaa51f025b61" />
<br><br>
🏷️ 뷰포트 가로길이 변화에 따른 UI 변화<br>
<img width="551" height="1472" alt="image" src="https://github.com/user-attachments/assets/9dee0eaa-6866-4f70-8a39-12fe73e2c221" />
<br><br>
🏷️스크롤 시 모금 탭, '기부하기' 액션 버튼이 화면 상단에 고정<br>
<img width="932" height="290" alt="image" src="https://github.com/user-attachments/assets/95fb1b16-177f-4277-b6aa-f0df9607f4d3" />
<br><br>
sticky UI도 반응형으로 구현<br>
<img width="475" height="430" alt="image" src="https://github.com/user-attachments/assets/c1e7be0c-f15d-404a-ad52-9f3cedf62bc4" />

<br><br><br>
### 🖥️ 기부
외부 API을 연동하여 이니시스 결제 창을 화면에 띄우고, 실제 결제로직도 서버에 구현하였습니다.<br>
🏷️ 표준화면<br>
<img width="348" height="467" alt="image" src="https://github.com/user-attachments/assets/d01cd505-dfe8-46b5-afe9-9e53560d3c30" />
<br><br>
🏷️ 금액을 버튼, 직접 입력 두 가지 방식으로 선택 가능<br>
<img width="319" height="145" alt="image" src="https://github.com/user-attachments/assets/0277422d-1292-4445-9727-d628798bfb33" />
<br><br>
🏷️ 결제창<br>
<img width="746" height="528" alt="image" src="https://github.com/user-attachments/assets/9c3eaa02-112f-4bd2-aea7-2e26e794250f" />
<br><br><br>

### 🖥️ 게시글 작성 및 조회
단순 게시글 작성 api 테스트를 위해 작성 페이지는 임시로 만들었습니다.<br>
게시글 작성 및 조회는 게시글을 3가지 타입으로 나누어 서버에 개별 저장 및 렌더링하는 방식을 사용했습니다.
- 부제목(h2)
- 텍스트(p)
- 이미지(figure - img)

<br><br>
1) 모금 글 작성<br>
   <img width="949" height="1242" alt="image" src="https://github.com/user-attachments/assets/ec7a9668-1e24-43e9-a6d2-abf3e68a15e1" />
   <br><br>
2) 관리자가 모금 활성화 시키면 사용자에게 노출<br>
  <img width="859" height="415" alt="image" src="https://github.com/user-attachments/assets/0fcf7211-fbc7-48e8-8dd8-60c2c7bee606" />
  <img width="1026" height="1303" alt="image" src="https://github.com/user-attachments/assets/2ed13151-f9e5-4f59-a3c8-e9985a312ef8" />
  <br><br>
  에디터에서 작성한 글이 정상적으로 불러와지는 것을 확인할 수 있습니다.
  <img width="667" height="1271" alt="image" src="https://github.com/user-attachments/assets/ead80e1b-e22e-4eab-afd1-3d16a7cf0345" />


---
