import styled from 'styled-components';
import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg';
import { ReactComponent as LogoM } from '../../assets/images/logo_grupomateus.svg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 50px 0 100px;

    @media screen and (min-height: 730px){
        height: 100vh;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.palette.lightBlack};
    margin-bottom: 20px;
`;

export const AvatarIcon = styled(Avatar)`
    width: 40px;
    height: 40px;
`;

export const Logo = styled(LogoM)`
    margin-bottom: 20px;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const Content = styled.p`
    margin: 2px 0;
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const EditIcon = styled(RiEdit2Fill)`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 4px;
`;