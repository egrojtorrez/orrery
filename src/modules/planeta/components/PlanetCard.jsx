import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useStoreCard, useStoreDataCard } from "../hooks/planetCardStore";

export function PlannetCard() {
  const {isOpen, onClose} = useStoreCard()
  const {data} = useStoreDataCard()
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose} backdrop='transparent' className='absolute right-0 top-0'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{data.title}</ModalHeader>
              <ModalBody>
                <p> 
                  {data.description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}