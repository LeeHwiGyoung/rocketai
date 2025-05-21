export interface User {
  name : string;
  year : string;
  month : string;
  day : string;
  birthTime : string;
}

interface SajuTextCell {
  type: 'text';
  hanjaText: string;
  koreanText: string;
}

interface SajuStampCell {
  type: 'stamp';
  fontColor: 'black' | 'white';
  backgroundColor: 'red' | 'black' | 'green' | 'white';
  border : 'black' | 'none';
  hanjaText: string;
  koreanText: string;
  detailHanjaText: string;
}

interface SajuGroupItem {
  hanjaText: string;
  koreanText: string;
}

interface SajuGroupCell {
  type: 'group';
  items: SajuGroupItem[];
}

// 각 열의 아이템은 위 세 가지 타입 중 하나가 될 수 있습니다.
type SajuColumnItem = SajuTextCell | SajuStampCell | SajuGroupCell;

interface SajuRow {
  rowTitle: { hanjaText: string; koreanText: string; };
  columns: SajuColumnItem[];
}

export interface SajuData {
  header: string[];
  body: SajuRow[];
}
