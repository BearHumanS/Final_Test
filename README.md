# ✔️ 정신줄 자버

## 프로젝트 설치 방법
Local에서 사용할 폴더 위치로 이동(cd '폴더위치')

``` cmd
git init
git clone https://github.com/mental-jober/frontend.git
git fetch --all
git pull origin main
npm i
npm run dev


## ✏️ Commit Convention

- 되도록이면 구체적으로 적을 것! - git commit -m (X)
- 반드시 vim으로 제목 / 본문에 구체적으로 작성
- footer에는 이슈 트래커 ID를 명시할 때 작성

- 새로운 기능 추가 - Feat: 커밋 메시지(한글)
- UI/ 스타일 관련 파일 추가 및 수정 - Design: 커밋 메시지(한글) #
- 버그 수정 - Fix: 커밋 메시지(한글) #
- 리팩토링(구조 변경) - Refactor: 커밋 메시지(한글)
- 이름 / 경로 / route 변경 - Rename: 커밋 메시지(한글)
- 빌드 업무 수정, 패키지 매니저 수정 - Chore: 커밋 메시지(한글)
- 문서 추가 및 수정 - Docs: 커밋 메시지(한글)
- 코드 / 파일 삭제 - Remove: 커밋 메시지(한글)
- 급하게 치명적인 버그 수정 - !HOTFIX: 커밋 메시지(한글)
- 테스트 추가, 테스트 리팩토링 - Test: 커밋 메시지(한글)

