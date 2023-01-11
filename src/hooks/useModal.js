import Swal from "sweetalert2";

const useModal = () => {

    const successFullModal = (text = 'Successfull') => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    const deleteModal = (cb) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                cb();
            }
        })
    }


    return {
        successFullModal,
        deleteModal
    }
};

export default useModal;