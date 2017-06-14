// this function is to ring the signal
// wpm :speed
//i :short-0, long-1

function Signal(i, wpm) {
  // Web Audio API���g���邩�m�F���Acontext������
  var SupportedAudioContext;
  try {
    SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
  } catch (e) {
    throw new Error('Web Audio API is not supported.');
  }
  var context = new SupportedAudioContext();

  // �I�V���[�^�[������
  var oscNode = context.createOscillator();
  oscNode.frequency.value = 880;
  oscNode.type = 'triangle';

  // ���ʒ��ߗp��node���쐬
  var gainNode = context.createGain();
  gainNode.gain.value = 10;

  // �������Ȃ���
  oscNode.connect(gainNode);
  gainNode.connect(context.destination);

  if (i == 0) {
    // play the shorter signal
    oscNode.start(0);
    oscNode.stop(wpm / (25 * 30));
  }

  // play the longer signal
  if (i == 1) {
    oscNode.start(0);
    oscNode.stop(wpm / (25 * 10));
  }
}