import * as React from 'react';
import {Modal, Portal, Text, Button, PaperProvider} from 'react-native-paper';

const Modals = () => {
  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>This is message from chairman</Text>
          <Button onPress={hideModal}>Close Modal</Button>
        </Modal>
      </Portal>
    </PaperProvider>
  );
};

export default Modals;
