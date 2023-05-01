import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
export {
    Profile,
    ProfileSchema,
} from './model/types/profile'

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice'

export {
    fetchProfileData
} from './model/services/fetchProfileData/fetchProfileData';


export {
    ProfileCard
} from './ui/ProfileCard/ProfileCard'

export {
    getProfileData
} from './model/selectors/getProfileData/getProfileData'

export {
    getProfileError
} from './model/selectors/getProfileError/getProfileError'

export {
    getProfileIsLoading
} from './model/selectors/getProfileIsLoading/getProfileIsLoading'

export {
    getProfileReadOnly
} from './model/selectors/getProfileReadOnly/getProfileReadOnly'

export {
    getProfileForm
} from './model/selectors/getProfileForm/getProfileForm'