import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// 가정: 라우터 설정이 /order/complete/:merchantUid 와 같이 되어 있음
const DonationCompletePage = () => {
  // URL 파라미터에서 merchant_uid를 가져옵니다.
  const { merchantUid } = useParams();
  const [paymentStatus, setPaymentStatus] = useState('PENDING'); // 초기 상태는 '처리 중'

  useEffect(() => {
    // 1. 2초마다 실행될 타이머를 설정합니다.
    const intervalId = setInterval(() => {
      // 서버에 주문 상태를 물어보는 함수 호출
      checkPaymentStatus();
    }, 2000); // 2000ms = 2초

    // 2. useEffect의 cleanup 함수: 컴포넌트가 언마운트되거나,
    //    결제가 완료되면 더 이상 폴링하지 않도록 타이머를 제거합니다.
    return () => clearInterval(intervalId);

  }, [paymentStatus]); // paymentStatus가 바뀔 때마다 useEffect 재실행 여부 검토

  // 서버로 주문 상태를 조회하는 API를 호출하는 함수
  const checkPaymentStatus = async () => {
    // 이미 결제가 완료되었다면 더 이상 요청을 보내지 않습니다.
    if (paymentStatus === 'PAID') {
      return;
    }

    try {
      const response = await axios.get(`/api/orders/${merchantUid}/status`);
      const currentStatus = response.data.status;

      console.log('현재 주문 상태:', currentStatus);

      // 서버에서 받은 상태로 UI 상태를 업데이트합니다.
      setPaymentStatus(currentStatus);

      // 3. 만약 서버에서 'PAID'(결제완료) 상태를 받으면?
      if (currentStatus === 'PAID') {
        // 이 페이지의 useEffect cleanup 함수가 호출되어 타이머가 자동으로 중지됩니다.
        // 여기서 페이지를 새로고침하거나, 최종 완료 화면으로 UI를 변경할 수 있습니다.
        alert('결제가 성공적으로 완료되었습니다.');
        // window.location.reload(); // 필요하다면 페이지 새로고침
      }

    } catch (error) {
      console.error('주문 상태 조회 중 오류 발생:', error);
      // 오류 발생 시에도 타이머를 중지하는 로직을 추가할 수 있습니다.
      setPaymentStatus('ERROR');
    }
  };

  // 현재 상태에 따라 다른 UI를 보여줍니다.
  const renderStatusMessage = () => {
    switch (paymentStatus) {
      case 'PENDING':
        return <h2>결제를 처리 중입니다. 잠시만 기다려주세요... ⏳</h2>;
      case 'PAID':
        return <h2>결제가 성공적으로 완료되었습니다! ✅</h2>;
      case 'FAILED':
        return <h2>결제에 실패했습니다. 다시 시도해주세요. ❌</h2>;
      case 'ERROR':
        return <h2>오류가 발생했습니다. 관리자에게 문의해주세요. 🚨</h2>;
      default:
        return <h2>알 수 없는 상태입니다.</h2>;
    }
  };

  return (
    <div>
      <h1>주문 완료</h1>
      <p>주문 번호: {merchantUid}</p>
      {renderStatusMessage()}
    </div>
  );
};

export default DonationCompletePage;