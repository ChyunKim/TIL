## Git flow 협업 프로젝트
Git flow를 활용하여 협업 프로젝트를 진행했습니다.
팀의 프로젝트 git 주소를 fork 하여 자신의 repository 에서 작업을 진행합니다.

fork 된 주소를 자신의 로컬 저장소에 clone 한뒤 진행합니다.
Git flow는 프로젝트 설정을 변경하기 위해 초기화를 필요로 합니다.
```git flow init``` 를 사용하여 초기화를 시작합니다.

초기화 후 새기능의 개발은 develop 브랜치에서 시작하게 됩니다.
새 기능 개발을 시작하기 위해선 다음과 같은 ```git flow feature start 새기능이름``` 으로 시작합니다.

기능개발 완료 후 ```git flow feature finish 새기능이름``` 으로 기능 브랜치를 merge 한 후 기능 브랜치를 삭제합니다.

자신의 respository develop을 팀 develop으로 pull requests 해줍니다.


해당 프로세스를 익히기 위해 팀원들간 Pig Dice Game 을 역할 분담하여 프로젝트를 만들었습니다.
