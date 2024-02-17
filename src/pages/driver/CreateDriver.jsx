// material-ui
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';
// project import
import ComponentSkeleton from '../components-overview/ComponentSkeleton';
import MainCard from '../../components/MainCard';

// styles
const IFrameWrapper = styled('iframe')(() => ({
  height: 'calc(100vh - 210px)',
  border: 'none'
}));

// ============================|| ANT ICONS ||============================ //

const CreateDriver = () => (
  <ComponentSkeleton>
    <MainCard title="Create Driver">
      {/* <IFrameWrapper title="Ant Icon" width="100%" src="https://ant.design/components/icon/" />
       */}
      <form noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
              <OutlinedInput
                id="firstname-login"
                type="firstname"
                // value={}
                name="firstname"
                placeholder="John"
                fullWidth
              />

              <FormHelperText error id="helper-text-firstname-signup"></FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    // error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    // value={values.lastname}
                    name="lastname"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    placeholder="Doe"
                    // inputProps={{}}
                  />
                  {/* {touched.lastname && errors.lastname && ( */}
                    <FormHelperText error id="helper-text-lastname-signup">
                      {/* {errors.lastname} */}
                    </FormHelperText>
                  {/* )} */}
                </Stack>
              </Grid>
        </Grid>
      </form>
    </MainCard>
  </ComponentSkeleton>
);

export default CreateDriver;
