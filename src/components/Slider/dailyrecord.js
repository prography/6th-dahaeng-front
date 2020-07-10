import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Moment from 'moment';
import blueEmotion from '../../assets/joraeng/category-joraeng/category-blue.png';
import purpleEmotion from '../../assets/joraeng/category-joraeng/category-purple.png';
import redEmotion from '../../assets/joraeng/category-joraeng/category-red.png';
import whiteEmotion from '../../assets/joraeng/category-joraeng/category-white.png';
import yellowEmotion from '../../assets/joraeng/category-joraeng/category-yellow.png';
import defaultEmotion from '../../assets/joraeng/category-joraeng/no-record.png';

const DailyRecordBox = styled.div`
  /* background-color: var(--secondary-color); */
  background-color: #ffffff;
  border: solid 3px var(--secondary-color);
  padding: 10px 0;
  flex: 1;
  margin: 1em;
  min-height: 200px;
  border-radius: 4px;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

//그날 행복기록에 입력한 조랭 이모티콘 출력
const DailyRecordJoraeng = styled.div`
  // 100/7% ~= 14.2%
  flex: 1 1 14.2%;
  max-width: 14.2%;
  text-align: center;
  padding: 10px;
  font-size: 21px;

  @media screen and (max-width: 768px) {
    padding: 3px;
  }
`;

const DropdownEmotion = styled.img`
  width: 100%;
`;

const DailyRecord = () => {
  const records = useSelector((state) => state.box.records);
  let days = [];
  for (let i = 1; i <= parseInt(Moment().format('DD')); i++) {
    days = days.concat(i);
  }

  const renderSwitch = (emotion) => {
    switch (emotion) {
      case 'WARM':
        return <DropdownEmotion src={yellowEmotion} alt="" />;
      case 'FUN':
        return <DropdownEmotion src={blueEmotion} alt="" />;
      case 'HAPPY':
        return <DropdownEmotion src={purpleEmotion} alt="" />;
      case 'TOUCHED':
        return <DropdownEmotion src={redEmotion} alt="" />;
      case 'EXTRA':
        return <DropdownEmotion src={whiteEmotion} alt="" />;
      default:
        return <DropdownEmotion src={defaultEmotion} alt="" />;
    }
  };

  return (
    <>
      <DailyRecordBox>
        {days.map((day) => (
          <DailyRecordJoraeng>
            {records &&
            records.filter(
              (record) =>
                parseInt(Moment(record.created_at).format('DD')) === day,
            )[0]
              ? renderSwitch(
                  records.filter(
                    (record) =>
                      parseInt(Moment(record.created_at).format('DD')) === day,
                  )[0].emotion,
                )
              : renderSwitch('NONE')}
          </DailyRecordJoraeng>
        ))}
        {/* {records &&
          records.map((record, index) => (
            <DailyRecordJoraeng key={index}>
              {parseInt(Moment(record.created_at).format('DD'))
                ? renderSwitch(record.emotion)
                : renderSwitch('NONE')}
            </DailyRecordJoraeng>
          ))} */}
      </DailyRecordBox>
    </>
  );
};

export default DailyRecord;
