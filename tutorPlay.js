//�L�[�{�[�h�̃{�^�����������s�x��
//�Ή����郂�[���X�������Đ�����
function successivePlay(e) {
  //div�v�f���N���b�N���ꂽ�Ƃ��̑΍�
  //�����̓����Ă��Ȃ��{�^�����N���b�N���ꂽ�Ƃ��̑΍�
  if(e.target.value == null){
  }else {
    var target = e.target;
    //cw_start�͔z����󂯎�邽�ߔz���錾����
    var text = new Array;
    text = target.value;
    cw_start(text);
  }
}

//textBox, id:Box�ɏ�����Ă��镶����̃��[���X�������Đ�����
function play_all() {
  var call = new Array;

  if ( document.getElementById("Box").value !=  '' ) {
    call = document.getElementById("Box").value.split('');
    
    cw_start(call);
  }
}
