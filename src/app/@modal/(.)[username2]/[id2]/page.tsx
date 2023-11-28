import Frame from "../../../../components/frame/Frame";
import Modal from "../../../../components/modal/Modal";
import swagPhotos, { Photo } from "../../../../photos";

export default function PhotoModal({
  params: { id2: photoId, username2:username },
}: {
  params: { id2: string; username2: string };
}) {
  const photos = swagPhotos;
  const photo: Photo = photos.find((p) => p.id === photoId)!;

  return (
    <Modal>
      modal {username}
      <Frame photo={photo} />
    </Modal>
  );
}
