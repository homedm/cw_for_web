//�L�[�{�[�h�̃{�^�����������s�x��
//�Ή����郂�[���X�������Đ�����
const successivePlay = (e) => {
  //div�v�f���N���b�N���ꂽ�Ƃ��̑΍�
  //�����̓����Ă��Ȃ��{�^�����N���b�N���ꂽ�Ƃ��̑΍�
  if(e.target.value == null){
  }else {
    let target = e.target;
    //cw_start�͔z����󂯎�邽�ߔz���錾����
    let text = new Array;
    text = target.value;
    cw_start(text);
  }
}

//textBox, id:Box�ɏ�����Ă��镶����̃��[���X�������Đ�����
const play_all = () => {
  let call = new Array;

  if ( document.getElementById("Box").value !=  '' ) {
    call = document.getElementById("Box").value.split('');

    cw_start(call);
  }
}
