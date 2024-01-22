document.addEventListener('DOMContentLoaded', function() {
    // 모든 버튼 요소를 가져옵니다.
    var toggleButtons = document.querySelectorAll('.toggleButton');

    // 각 버튼에 대해 이벤트 처리
    toggleButtons.forEach(function(button){
        button.addEventListener('click', function() {

            // 해당 버튼의 data-target 속성 값을 이용하여 대응하는 숨겨진 본문을 가져옵니다.
            var targetId = button.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);
      
            // 숨겨진 본문의 hidden 클래스를 토글하여 보이기/숨기기를 처리합니다.
            if (targetContent.classList.contains('hidden')) {
              targetContent.classList.remove('hidden');
            } else {
              targetContent.classList.add('hidden');
            }
        });
    });
  });