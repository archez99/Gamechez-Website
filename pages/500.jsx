import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Sanırım 500 İç Sunucu Hatası var. Lütfen daha sonra tekrar deneyin!"} />
}

export default UnkownPage;
