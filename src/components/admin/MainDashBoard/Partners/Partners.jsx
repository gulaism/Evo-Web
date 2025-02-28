// style
import styles from "./Partners.module.scss";
// icons
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import partnerIcon from "../../../../assets/images/admin/Partners/partnerIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import { useGetAllPartnersQuery } from "../../../../redux/services/apiSlice";
import { useDeletePartnerMutation } from "../../../../redux/services/adminApiSlice";

const Partners = () => {
  const {
    data: getPartners,
    isLoading: isLoadingPartners,
    isError: isErrorPartners,
  } = useGetAllPartnersQuery();
  // use Delete Partner Mutation
  const [
    deletePartner,
    { isLoading }
  ] = useDeletePartnerMutation();

  const handleDeletePartner = async (id) => {
    try {
      await deletePartner(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.partners}>
      <h2>Partnyorlar</h2>
      <div className={styles.title}>Partnyorlar</div>
      <div className={styles.partnerList}>
        {getPartners?.map((partner) => (
          <div key={partner.id}>
            <div className={styles.editIcon}>
              <img src={editIcon} alt="" />
            </div>
            <div className={styles.partnerIcon}>
              <img src={partner.imageUrl} alt="" />
            </div>
            <div
              onClick={() => handleDeletePartner(partner.id)}
              className={styles.trashIcon}
            >
              <img src={trashIcon} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <img src={plusIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
